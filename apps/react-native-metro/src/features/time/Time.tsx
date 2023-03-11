import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppDispatch } from '../../app/hooks';
import { timeApi } from '../../app/services/times';

export default function TimeDisplay({
    offset,
    label,
} : {
    offset: string
    label: string
}) {

    const dispatch = useAppDispatch()

    const [data, setData] = React.useState<any>(null);

    React.useEffect(() => {

        (async () => {
            try {
                const { data } = await dispatch(timeApi.endpoints.getTime.initiate(offset));
                if (data) {
                    setData(data);
                }
            } catch (errorCaught) {
                console.error(errorCaught);
            }
        })();
    }, [offset, dispatch]);

    return (
      <View style={styles.container}>
        <Text testID="time-title" style={styles.textTitle}>
            Time Zone
        </Text>
        <View style={styles.column}>
            <View style={styles.row}>
                <Text>{`\u2022 Zone:`}</Text>
                <Text testID="time-zone-text">
                    {label}
                </Text>
            </View>
            <View style={styles.row}>
                <Text>{`\u2022 Time:`}</Text>
                <Text testID="time-datetime-text">
                    {data?.time ? new Date(data.time).toLocaleTimeString() : 'unknown'}
                </Text>
            </View>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 12,
        gap: 7,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
        flexWrap: 'wrap',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 7,
        flexWrap: 'wrap',
        marginLeft: 12,
        marginRight: 12,
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
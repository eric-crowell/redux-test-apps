/* eslint-disable no-nested-ternary */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { postApi } from '../../app/services/post.js';

export default function Post({
  id,
} : {
  id: number
}) {
  const { data, error } = postApi.useGetPostQuery(id);

  return (
    <View style={styles.container}>
      <Text testID="post-title" style={styles.textTitle}>
        Post
      </Text>
      <View style={styles.column}>
        {error ? (
          <Text>there was an error</Text>
        ) : !data ? (
          <Text>loading</Text>
        ) : (
          <View style={styles.row}>
            <Text>Title:</Text>
            <Text testID="post-name">
              {data.name}
            </Text>
          </View>
        )}
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
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

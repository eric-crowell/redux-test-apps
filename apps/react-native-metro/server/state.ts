import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';
import type { Post } from '../src/app/services/post';

const adapter = createEntityAdapter<Post>()
let state: EntityState<Post>;
state = adapter.getInitialState();
state = adapter.setAll(state, [
    { id: 1, name: 'A sample post', fetched_at: new Date().toUTCString() },
    {
    id: 2,
    name: 'A post about rtk-query',
    fetched_at: new Date().toUTCString(),
    },
]);

export function mockStateGet() {
    return state;
}

export function mockStateUpdateOne(postId: number) {
    state = adapter.updateOne(state, {
        id: postId,
        changes: { fetched_at: new Date().toUTCString() },
    })
}
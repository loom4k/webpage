import { LanyardWebsocket, useLanyard } from 'react-use-lanyard';

export const Status = () => {
    const { loading, status } = useLanyard({
        userId: 'user-id',
        socket: true,
    }) as LanyardWebsocket;

    return status;
}
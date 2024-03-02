'use server'
import POST from './POST';
export default async function updateProfile(e:
    { data: {}, type: string }
) {
    'use server'
    console.log(e);
    const res = await POST('user/updateProfile', e);
    return res;
};
'use server'
import POST from './POST';
export default async function createStudent(e:
    { name: string, id: string, department: string, batch: string, session: string, clubRoles: [] }
) {
    'use server'
    console.log(e);
    const res = await POST('user/admin/createUser', e);
    return res;
};
export const loadUserInfo = (id: string): Promise<{ id: string, name: string }> =>
    new Promise<{ id: string, name: string }>((resolve) => resolve({ id, name: 'Felix' }))

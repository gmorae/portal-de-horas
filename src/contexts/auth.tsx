import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { Alert } from 'react-native'

type AuthProviderProps = {
    children: ReactNode
}

type AuthContextData = {
    signed: boolean,
    user: User | null,
    signIn: (email: string, password: string) => void
}

type User = {
    email?: string
}


export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null)

    async function signIn(email: string, password: string) {
        try {
            setUser({ email })
        } catch (error) {
            Alert.alert('Opss', 'Erro ao realizar o login, veja se seus dados estão corretos e tente novamente')
        }
    }

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                signIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
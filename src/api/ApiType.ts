

export type PickApiType<T extends APIEnum> = T extends infer U ? (U extends keyof AllApiTypes ? AllApiTypes[U] : never) : never;

export type VarChar = string | number | String | Number
export type useGetReturnType<T extends APIEnum> = Pick<PickApiType<T>, 'data'> & {
    error: any;
    loader: boolean;
    get?: ({ reqBody }: Pick<PickApiType<T>, 'reqBody'>) => void;
    reset?: (data?: any) => void;
}
export type usePostReturnType<T extends APIEnum> = {
    loader?: boolean;
    post?: ({ reqBody }: Pick<PickApiType<T>, 'reqBody'>) => Promise<Pick<PickApiType<T>, 'data'>>
}

export type useGetBody<T extends APIEnum> = Pick<PickApiType<T>, 'reqBody'> & {
    endpoint: APIEnum
    getInitial?: boolean | undefined;
    interProcess?: (data: { data: (PickApiType<T>)['data'] }) => any
    getFullResponse?: boolean
    subPath?: string
    authToken?: string
}
export type useGetType = <T extends APIEnum>({ getInitial, reqBody, subPath, authToken }: useGetBody<T>) => useGetReturnType<T>
export type usePostType = <T extends APIEnum>({ endpoint, authToken }: { endpoint: APIEnum, formData?: boolean, xml?: boolean, authToken?: string }) => usePostReturnType<T>



export type APIEnum = 'login'


export type AllApiTypes = {
    'login': {
        reqBody: {
            email: VarChar,
            password: VarChar
        },
        data: any,
    }
}


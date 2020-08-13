export interface IAddress {
    name: string,
    address: string;
}

export interface IMail {
    to: IAddress;
    from: IAddress;
    subject: string;
    body: string;
}

export interface IMailtrapProvider {
    sendEmail( mail: IMail ): Promise<void>;
}
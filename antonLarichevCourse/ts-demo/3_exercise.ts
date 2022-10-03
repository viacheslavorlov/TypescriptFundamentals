interface  ITags  {
    name: string,
    value: number
}
interface IInfo {
    desc: string,
    isActive: boolean
}

interface IData {
    userId: number;
    id: number;
    title: string;
    info: IInfo;
    tags:  ITags[];
}
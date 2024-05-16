export interface IScreenComponentProps {
    data: IScreenData[];
    setButtonName: (name: string) => void
}
export interface IScreenData {
    id: number
    name: string
    title: string
}
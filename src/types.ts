export interface Modal {
    useModal: (content: JSX.Element) => void
    closeModal: () => void
}

export interface CategoryInterface {
    id: string;
    name: string;
    description: string | undefined
}

export interface RecordsInterface {
    id: string;
    money: number;
    categoryID: string;
    categoryName: string;
    description?: string | undefined
    createdAt: string
}

export interface RecordFormProps {
    closeModal: () => void;
    requestType: string;
    category?: RecordsInterface
}
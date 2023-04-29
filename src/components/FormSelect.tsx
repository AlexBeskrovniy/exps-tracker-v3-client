import { SelectWrapper, Select } from "styled/Form.styled";
import { CategoryInterface } from "@/types";

interface FormSelectProps {
    defaultValue?: string;
    categories: CategoryInterface[];

}

const FormSelect = ({ defaultValue, categories }: FormSelectProps) => {
    return (
        <SelectWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
            </svg>
            <Select
                name="categoryID"
                placeholder="Category"
                defaultValue={defaultValue}
            >
                <option value="">No category</option>
                {categories && categories.map((category: CategoryInterface) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </Select>
        </SelectWrapper>
    );
}

export default FormSelect;
import { SelectWrapper, Select } from "styled/Form.styled";
import { CategoryInterface } from "@/types";

interface FormSelectProps {
    defaultValue?: string;
    categories: CategoryInterface[];

}

const FormSelect = ({ defaultValue, categories }: FormSelectProps) => {
    return (
        <SelectWrapper>
            <svg>
                <use href="#caret-down"></use>
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
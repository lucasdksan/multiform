import * as C from "./styles";

interface SelectOptionType {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: ()=> void;
}

const SelectOption = ({ description, icon, title, selected, onClick }: SelectOptionType)=>{

    return(
        <C.Container 
            selected={selected}
            onClick={onClick}
        >
            <C.Icon>{icon}</C.Icon>
            <C.Info>
                <C.Title>{title}</C.Title>
                <C.Description>{description}</C.Description>
            </C.Info>
        </C.Container>
    );
}

export default SelectOption;
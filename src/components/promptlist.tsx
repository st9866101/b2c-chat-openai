import { useState } from "react";
import styled from 'styled-components';
interface Prompt {
    category: string;
    title: string;
    text: string;
    example: string;
}
const PromptButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;
const PromptLi = styled.li
    `
    list-style:none;
`;
const PromptUl = styled.ul`
    display: flex;
    justify-content: space-between;
     align-items: center;
`;


interface PromptListProps {
    prompts: Prompt[];
    onCategoryClick: (category: string) => void;
}

function PromptList({ prompts, onCategoryClick }: PromptListProps) {
    const [filteredPrompts, setFilteredPrompts] = useState(prompts);

    const handleCategoryClick = (category: string) => {
        if (category === "全部") {
            setFilteredPrompts(prompts);
        } else {
            const filtered = prompts.filter((prompt) => prompt.category === category);
            setFilteredPrompts(filtered);
        }
        onCategoryClick(category);
    };

    return (
        <>
            <PromptUl>
                <PromptLi>
                    <PromptButton onClick={() => handleCategoryClick("全部")}>
                        全部
                    </PromptButton>
                </PromptLi>
                {Array.from(new Set(prompts.map((prompt) => prompt.category))).map(
                    (category) => (
                        <PromptLi key={category} >
                            <PromptButton onClick={() => handleCategoryClick(category)}>
                                {category}
                            </PromptButton>

                        </PromptLi>
                    )
                )}
            </PromptUl>
            <div>
                {filteredPrompts.map((prompt, index) => (
                    <div key={index}>
                        <h3>{prompt.title}</h3>
                        <p>{prompt.text}</p>
                        <p>例如：{prompt.example}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default PromptList;
import styled from '@emotion/styled';
import {useState, useEffect} from 'react';
import Markdown from 'markdown-to-jsx';

import { regularTextStyle } from '../../styles/_typographies';

const MarkdownOutputContainer = styled.div`
    color: ${(props) => props.theme.colors.white};
    display: flex;
    padding-left: 10px;
    align-items: center;
    ${regularTextStyle};
`;

export default function MarkdownOutput({path}){
    const [content, setContent] = useState('');

    useEffect(() => {
        import(`../../content/${path}`)
            .then(md => {
                fetch(md.default)
                    .then(res => res.text())
                    .then(text => setContent(text))
            })
            .catch(err => console.log(err));
    }, [path]);

    return (
        <MarkdownOutputContainer>
            <Markdown>
                {content}
            </Markdown>
        </MarkdownOutputContainer>
    );
}
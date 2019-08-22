import React from "react";
import { IArticle } from "../model/ArticleItem";
import { Button } from "./button";
import styled from "styled-components";

interface themedSpan {
  main?: boolean;
  large?: boolean;
}

interface TableProps {
  list: IArticle[];
  onDismiss: (id) => void;
}

export const Table: React.FC<TableProps> = ({ list, onDismiss }) => (
  <div className="table">
    {list
      .filter(item => item.url || item.story_url)
      .map(item => (
        <div key={item.objectID} className="table-row">
          <Span large>
            <a href={item.url || item.story_url} target="_blank">
              {item.title || item.story_title}
            </a>
          </Span>
          <Span main>{item.author}</Span>
          <Span>Comments: {item.num_comments}</Span>
          <Span>Points: {item.points}</Span>
          <Span>
            <Button
              onClick={() => onDismiss(item.objectID)}
              className="button-inline"
            >
              Dismiss
            </Button>
          </Span>
        </div>
      ))}
  </div>
);

const Span = styled.span<themedSpan>`
  width: ${props => (props.large ? "40%" : props.main ? "30%" : "10%")};
`;

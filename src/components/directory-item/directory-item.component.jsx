import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  DirectoryItemBody,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";

export const DirectoryItem = (props) => {
  const { imageUrl, title, route } = props;
  const navigate = useNavigate();
  const navigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={navigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop now!</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

import styled from "styled-components/native";

const PostView = styled.View({
  marginTop: "20px",
  padding: "15px",
  borderBottomWidth: "1px",
  borderBottomColor: "green",
  borderBottomStyle: "solid",
  flexDirection: "row",
});

const PostImage = styled.Image({
  marginRight: "12px",
  width: "60px",
  height: "60px",
  borderRadius: "12px",
});

const PostTitle = styled.Text({
  fontSize: "16px",
  fontWeight: 700,
});

const PostDetails = styled.View({
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  flex: 1,
});
const PostDate = styled.Text({
  fontSize: "12px",
  fontWeight: 700,
});
const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + "...";
  }
  return str;
};

export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: imageUrl,
        }}
      />

      <PostDetails>
        <PostTitle>{truncateTitle(title)}</PostTitle>
        <PostDate>{new Date(createdAt).toLocaleDateString()}</PostDate>
      </PostDetails>
    </PostView>
  );
};

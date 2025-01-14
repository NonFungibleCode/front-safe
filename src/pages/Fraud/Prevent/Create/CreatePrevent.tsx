import React, { useMemo, useState } from "react";
import "react-quill/dist/quill.snow.css";
import OriginalBtn from "../../../../components/OriginalBtn";
import * as S from "./CreatePrevent.style";

const CreatePrevent = () => {
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  // Quill 모듈
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          ["image"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ font: [] }],
          [{ align: [] }],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [],
  );

  // 이미지 제어
  function imageHandler() {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", ".png,.jpg,.jpeg");
    input.click();
    // input.onchange = (e: any) => {
    //   const files = e.target.files;
    //   const file = files[0];
    //   const fileName = file.name;
    //   console.log(fileName);
    //   const date = moment().format('YYYYMM');
    //   const timeStamp = Date.now();
    //   const fileNameSplit = fileName.split('.');
    //   const extension = fileNameSplit[fileNameSplit.length - 1]
    //   new AWS.S3.ManagedUpload({
    //     params: {
    //       Bucket: `${AWS_BUCKET}-public`,
    //       Key: `admin/notice/editor/${user.adminId}_${timeStamp}.${extension}`,
    //       Body: file,
    //       ACL: 'public-read'
    //     }
    //   }).promise().then((res) => {
    //     const range = this.quill.getSelection();
    //     this.quill.insertEmbed(range.index, 'image', res.Location);
    //   }).catch((e) => {
    //     ApiErrorHandler.allCode(e);
    //   });
    // };
  }

  const onCancel = () => {
    window.history.back();
  };

  return (
    <section>
      <S.HighlightH2>
        <span>사기예방법 공유</span>
      </S.HighlightH2>
      <article>
        <S.TitleH3>사기예방법 공유 글 작성</S.TitleH3>
        <S.SubTitleP>유저에게 공유할 소중한 내용을 작성해주세요.</S.SubTitleP>
        <S.ContentsWrapper>
          <div>
            <label htmlFor="inp_title">제목</label>
            <S.TitleInput
              type="text"
              id="inp_title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="inp_subTitle">소제목</label>
            <S.SubTitleInput
              type="text"
              id="inp_subTitle"
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
            />
          </div>
          <label htmlFor="inp_contents">본문</label>
          <S.CustomQuill
            theme="snow"
            modules={modules}
            value={contents}
            onChange={(content) => {
              setContents(content);
            }}
            id="inp_contents"
          />
        </S.ContentsWrapper>
        <S.BtnWrapper>
          <OriginalBtn onClick={onCancel}>취소</OriginalBtn>
          <OriginalBtn onClick={() => {}}>작성하기</OriginalBtn>
        </S.BtnWrapper>
      </article>
    </section>
  );
};

export default CreatePrevent;

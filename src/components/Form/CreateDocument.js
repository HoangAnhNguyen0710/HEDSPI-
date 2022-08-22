/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import React from "react";
import ImageUploader from "../ImageUpload";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const defaultDoc = {
  title: "",
  subject_code: "",
  subject_name: "",
  program: "",
  author: "Nguyen Hoang Anh",
  lecturer: "",
  description: "",
  semester: 1,
  type: "",
  likes: 0,
  views: 0,
  rating: 0,
};

const CreateDocumentForm = () => {
  const navigate = useNavigate();
  const [document, setDocument] = useState(defaultDoc);
  const [uploadIMG, setUploadIMG] = useState(false);
  const subjectList = useSelector((state) => state.subject.value);
  const [isUploaded, setIsUploaded] = useState(false);
  //   console.log(subjectList);
  const handleChange = (e) => {
    setDocument({ ...document, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // setDocument(defaultDoc);
    if(isUploaded){
      alert("Đăng tài liệu thành công !");
      navigate("/");
    }
  }, [isUploaded]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(document);
    setUploadIMG(!uploadIMG);
    //  setDocument(defaultDoc);
  };

  return (
    <div className="w-full sm:w-2/3 m-3">
      <span className="py-3 text-2xl font-semibold">Tạo tài liệu</span>
      <form className="py-6" onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <TextField
            name="title"
            value={document.title}
            fullWidth
            label="Tiêu đề"
            id="fullWidth"
            htmlFor="component-outlined"
            size="small"
            sx={{ mb: 2 }}
            onChange={handleChange}
          />
          <div className="w-1/2 md:w-1/5 mb-4 pr-3">
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-select-small">Chương trình</InputLabel>
              <Select
                name="program"
                value={document.program}
                labelId="demo-select-small"
                id="demo-select-small"
                fullWidth
                label="Chương trình"
                onChange={handleChange}
              >
                <MenuItem value="K64 đổ về trước">K64 đổ về trước</MenuItem>
                <MenuItem value="Từ K65 trở đi">Từ K65 trở đi</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="w-1/2 md:w-3/5 mb-4">
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-select-small">Học phần</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                fullWidth
                label="Học phần"
                name="subject_name"
                onChange={handleChange}
                value={document.subject_name}
              >
                {subjectList.map((subject) => (
                  <MenuItem key={subject.id} value={subject.name}>
                    {subject.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="w-full md:w-1/5 md:pl-3">
            <TextField
              fullWidth
              label="Giảng viên"
              id="fullWidth"
              htmlFor="component-outlined"
              size="small"
              sx={{ mb: 2 }}
              name="lecturer"
              value={document.lecturer}
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2 mb-4 pr-3">
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-select-small">Kì học</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                fullWidth
                label="Kì học"
                name="semester"
                value={document.semester}
                onChange={handleChange}
              >
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={1}>1</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="w-1/2 mb-4 prl3">
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-select-small">Thể loại</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                fullWidth
                label="Thể loại"
                name="type"
                value={document.type}
                onChange={handleChange}
              >
                <MenuItem value="Tài liệu môn học">Tài liệu môn học</MenuItem>
                <MenuItem value="Đề thi">Đề thi</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <ImageUploader
          upload={uploadIMG}
          setUpload={setUploadIMG}
          document={document}
          isUploaded={isUploaded}
          setIsUploaded={setIsUploaded}
        />
        <div className="my-4 w-full">
          <TextField
            id="outlined-multiline-static"
            label="Mô tả"
            multiline
            rows={5}
            fullWidth
            name="description"
            value={document.description}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <Button variant="contained" type="submit">
            Tạo tài liệu
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateDocumentForm;
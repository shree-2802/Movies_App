import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../../Form/Form.scss";
import { TypeCheck } from "../../../Constants/Constants";
import { AddListForm } from "../../../Constants/Constants";
import { Item, Check } from "../../../Types/Types";
function Add2List() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [link, setLink] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    if (type === "Movie Name") setName(e.target.value);
    if (type === "Image URL") setLink(e.target.value);
  };
  let c = 0;
  const handleSubmit = (e: FormEvent<HTMLFormElement>, genre: Check) => {
    e.preventDefault();
    if (
      TypeCheck[genre].map((item: Item) => {
        if (item.link === link) {
          console.log("yes link");
          sweetAlert("Oops", "Link already exists", "error");
        } else c++;
        return<></>
      })
    )
      console.log(c);
    if (c === TypeCheck[genre].length) {
      TypeCheck[genre].push({
        id: uuidv4(),
        name: name,
        link: link,
        description: description,
      });
      sweetAlert("", "Movie Added", "success");
    }
  };
  return (
    <div className="add-List">
      <form className="form" onSubmit={(e) => handleSubmit(e, genre as Check)}>
        <select name="Genre" id="gn" onChange={(e) => setGenre(e.target.value)}>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
          <option value="musicals">Musicals</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
          <option value="scienceFiction">Science Fiction</option>
          <option value="sports">Sports</option>
          <option value="thriller">Thrillers</option>
        </select>
        {AddListForm.map((item) => {
          return item.placeholder !== "Description" ? (
            <input
              type={item.type}
              placeholder={item.placeholder}
              required
              value={item.placeholder === "Movie Name" ? name : link}
              onChange={(e) => handleChange(e, item.placeholder)}
            />
          ) : (
            <textarea
              placeholder={item.placeholder}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Add2List;

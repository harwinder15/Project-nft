import React, { Component } from "react";
import Clock from "../components/Clock";
import Footer from "../components/footer";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  .mainside{
    .connect-wal{
      display: none;
    }
    .logout{
      display: flex;
      align-items: center;
    }
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;

const Createpage = (props) => {
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [file, setFile] = useState();
  const [count, setCount] = useState(0);
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onChange = (e) => {
    let files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);
    document.getElementById("file_name").style.display = "none";
    setFiles({ files: [...files, ...filesArr] });
  };
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [allData, setAllData] = useState([]);

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      title,
    };
    props.func(val);
    clearState();
  };
  const handleAdd = () => {
    if (name.length !== 0) {
      setAllData((newData) => [...newData, title, name]);
      setName("");
      setTitle("");
    }
  };
  const clearState = () => {
    setName("");
    setTitle("");
  };
  const style = {
    position: "absolute",
    top: "50%",
    height: "96%",
    left: "50%",
    borderRadius: "20px",
    transform: "translate(-50%, -50%)",
    width: 420,
    bgcolor: "background.paper",
    border: "2px solid rgb(131,100,226)",
    boxShadow: "0 0 10px rgb(131,100,226)",
    p: 4,
  };
  const [list,updateList] = useState("");
  const handleRemove = (index)=>{
    const data = index.target.getAttribute('name','title')
    updateList(list.filter(item => item.name !== data));
  
  
  }
  const handleShow = () => {
    document.getElementById("tab_opt_1").classList.add("show");
    document.getElementById("tab_opt_1").classList.remove("hide");
    document.getElementById("tab_opt_2").classList.remove("show");
    document.getElementById("btn1").classList.add("active");
    document.getElementById("btn2").classList.remove("active");
    document.getElementById("btn3").classList.remove("active");
  };
  const handleShow1 = () => {
    document.getElementById("tab_opt_1").classList.add("hide");
    document.getElementById("tab_opt_1").classList.remove("show");
    document.getElementById("tab_opt_2").classList.add("show");
    document.getElementById("btn1").classList.remove("active");
    document.getElementById("btn2").classList.add("active");
    document.getElementById("btn3").classList.remove("active");
  };
  const handleShow2 = () => {
    document.getElementById("tab_opt_1").classList.add("show");
    document.getElementById("btn1").classList.remove("active");
    document.getElementById("btn2").classList.remove("active");
    document.getElementById("btn3").classList.add("active");
  };
  const unlockClick = () => {
    setIsActive(true);
  };
  const unlockHide = () => {
    setIsActive(false);
  };
  const unlockClick1 = () => {
    setIsActive1(true);
  };
  const unlockHide1 = () => {
    setIsActive1(false);
  };
  const unlockClick2 = () => {
    setIsActive2(true);
  };
  const unlockHide2 = () => {
    setIsActive2(true);
  };
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      <GlobalStyles />

      <section
        className="jumbotron breadcumb no-bg"
        style={{
          backgroundImage: `url(${"./img/background/subheader.jpg"})`,
        }}
      >
        <div className="mainbreadcumb">
          <div className="container">
            <div className="row m-10-hor">
              <div className="col-12">
                <h1 className="text-center">Create 2</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-lg-7 offset-lg-1 mb-5">
            <div id="form-create-item" className="form-border" action="#">
              <button
                style={{
                  color: "rgb(131,100,226)",
                  height: "150px",
                  width: "150px",
                  border: "solid 2px rgb(131,100,226)",
                  borderRadius: "12px",
                }}
                onClick={handleOpen}
              >
                Create New
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <input type="file" onChange={handleChange} />
                  <img src={file} style={{ width: "210px", height: "110px" }} />
                  <div className="spacer-20"></div>

                  <Typography
                    id="modal-modal-title"
                    variant="h10"
                    component="h5"
                  >
                    Title{""}
                  </Typography>

                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <input
                      type="text"
                      placeholder="Title"
                      style={{ height: "30px", width: "300px" }}
                    ></input>
                  </Typography>
                  <div className="spacer-20"></div>

                  <Typography
                    id="modal-modal-title"
                    variant="h10"
                    component="h5"
                  >
                    {" "}
                    Symbol{" "}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <input
                      type="text"
                      placeholder="Symbol"
                      style={{ height: "30px", width: "300px" }}
                    ></input>
                  </Typography>
                  <div className="spacer-20"></div>

                  <Typography
                    id="modal-modal-title"
                    variant="h10"
                    component="h5"
                  >
                    {" "}
                    Description{" "}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <input
                      type="text"
                      placeholder="Description"
                      style={{ height: "30px", width: "300px" }}
                    ></input>
                  </Typography>
                  <div className="spacer-20"></div>

                  <Typography
                    id="modal-modal-title"
                    variant="h10"
                    component="h5"
                  >
                    {" "}
                    Royalities{" "}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <input
                      type="number"
                      value={count}
                      placeholder="Description"
                      style={{ height: "30px", width: "300px" }}
                    ></input>
                    <br />
                  </Typography>

                  <div className="spacer-20"></div>
                  <button
                    type="submit"
                    style={{ backgroundColor: "rgb(131,100,226)" }}
                  >
                    Create Collection
                  </button>

                  <button
                    type="button"
                    style={{ backgroundColor: "rgb(131,100,226)" }}
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                </Box>
              </Modal>
              <div className="field-set">
                <div className="spacer-single"></div>

                <h5>Upload file</h5>

                <div className="d-create-file">
                  <p id="file_name">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
                  {files.map((x) => (
                    <p key="{index}">
                      PNG, JPG, GIF, WEBP or MP4. Max 200mb.{x.name}
                    </p>
                  ))}
                  <div className="browse">
                    <input
                      type="button"
                      id="get_file"
                      className="btn-main"
                      value="Browse"
                    />
                    <input
                      id="upload_file"
                      type="file"
                      multiple
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="spacer-single"></div>
                <div className="switch-with-title">
                  <h5>
                    <i className="fa fa- fa-unlock-alt id-color-2 mr10"></i>
                    Unlock Once Purchased
                  </h5>
                  <div className="de-switch">
                    <input
                      type="checkbox"
                      id="switch-unlock"
                      className="checkbox"
                    />
                    {isActive ? (
                      <label
                        htmlFor="switch-unlock"
                        onClick={unlockHide}
                      ></label>
                    ) : (
                      <label
                        htmlFor="switch-unlock"
                        onClick={unlockClick}
                      ></label>
                    )}
                  </div>
                  <div className="clearfix"></div>
                  <p className="p-info pb-3">
                    Unlock content after successful transaction.
                  </p>

                  {isActive ? (
                    <div id="unlockCtn" className="hide-content">
                      <input
                        type="text"
                        name="item_unlock"
                        id="item_unlock"
                        className="form-control"
                        placeholder="Access key, code to redeem or link to a file..."
                      />
                    </div>
                  ) : null}
                </div>
                <div className="spacer-single"></div>
                <div className="switch-with-title">
                  <h5>
                    <i className="fa fa- fa-unlock-alt id-color-2 mr10"></i>
                    Put On Marketplace
                  </h5>
                  <div className="de-switch">
                    <input
                      type="checkbox"
                      id="switch-unlock1"
                      className="checkbox"
                    />
                    {isActive1 ? (
                      <label
                        htmlFor="switch-unlock1"
                        onClick={unlockHide1}
                      ></label>
                    ) : (
                      <label
                        htmlFor="switch-unlock1"
                        onClick={unlockClick1}
                      ></label>
                    )}
                  </div>
                  <div className="clearfix"></div>
                  {isActive1 ? (
                    <div id="unlockCtn" className="hide-content">
                      <br />
                      <h5>Select method</h5>
                      <br />
                      <br />
                      <div className="de_tab tab_methods">
                        <ul className="de_nav">
                          <li id="btn1" className="active" onClick={handleShow}>
                            <span>
                              <i className="fa fa-tag"></i>Fixed price
                            </span>
                          </li>
                          <li id="btn2" onClick={handleShow1}>
                            <span>
                              <i className="fa fa-hourglass-1"></i>Timed auction
                            </span>
                          </li>
                          <li id="btn3" onClick={handleShow2}>
                            <span>
                              <i className="fa fa-users"></i>Open for bids
                            </span>
                          </li>
                        </ul>

                        <div className="de_tab_content pt-3">
                          <div id="tab_opt_1">
                            <h5>Price</h5>
                            <input
                              type="text"
                              name="item_price"
                              id="item_price"
                              className="form-control"
                              placeholder="enter price for one item (ETH)"
                            />
                          </div>

                          <div id="tab_opt_2" className="hide">
                            <h5>Minimum bid</h5>
                            <input
                              type="text"
                              name="item_price_bid"
                              id="item_price_bid"
                              className="form-control"
                              placeholder="enter minimum bid"
                            />

                            <div className="spacer-20"></div>

                            <div className="row">
                              <div className="col-md-6">
                                <h5>Payment Token</h5>
                                <select className="form-control">
                                  <option>USDT</option>
                                </select>
                              </div>
                              <div className="col-md-6">
                                <h5>Expiration date</h5>
                                <input
                                  type="date"
                                  name="bid_expiration_date"
                                  id="bid_expiration_date"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>

                          <div id="tab_opt_3"></div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="spacer-single"></div>
                <div className="switch-with-title">
                  <h5>
                    <i className="fa fa- fa-unlock-alt id-color-2 mr10"></i>
                    Lazy Minting
                  </h5>
                  <div className="de-switch">
                    <input
                      type="checkbox"
                      id="switch-unlock2"
                      className="checkbox"
                    />
                    {isActive2 ? (
                      <label
                        htmlFor="switch-unlock2"
                        onClick={unlockHide2}
                      ></label>
                    ) : (
                      <label
                        htmlFor="switch-unlock2"
                        onClick={unlockClick2}
                      ></label>
                    )}
                  </div>

                  <div className="spacer-20"></div>

                  <h5>Title</h5>
                  <input
                    type="text"
                    name="item_title"
                    id="item_title"
                    className="form-control"
                    placeholder="e.g. 'Crypto Funk"
                  />

                  <div className="spacer-10"></div>

                  <h5>Description</h5>
                  <textarea
                    data-autoresize
                    name="item_desc"
                    id="item_desc"
                    className="form-control"
                    placeholder="e.g. 'This is very limited item'"
                  ></textarea>

                  <div className="clearfix"></div>
                  {!isActive2 ? (
                    <div id="unlockCtn" className="hide-content">
                      <h5>Collaborator(Optional)</h5>
                      <input
                        type="text"
                        value={name}
                        name="item_title"
                        id="item_title"
                        className="form-control"
                        placeholder="Please Enter Colaborator's Wallet Address"
                        onChange={(e) => setName(e.target.value)}
                      />

                      <input
                        type="text"
                        name="item_title"
                        id="item_title"
                        value={title}
                        className="form-control"
                        placeholder="Percent"
                        onChange={(e) => setTitle(e.target.value)}
                      />

                      <input
                        type="button"
                        id="submit"
                        className="btn-main"
                        value="Add Collaborator"
                        onClick={handleAdd}
                      />
                    </div>
                  ) : null}
                </div>
                {[...allData].reverse().map((val, i) => (
                  <div>
                    <h6>{val}</h6>
                  </div>
                ))}
                <div className="spacer-20"></div>

                <div>
                  {" "}
                  <input
                    type="button"
                    className="btn-main"
                  
                    value="Remove"
                    onClick={handleRemove}
                  />
                </div>

                <div className="spacer-20"></div>

                <div className="spacer-10"></div>
                <div className="spacer-10"></div>
                <div className="spacer-10"></div>
                <input
                  type="button"
                  id="submit"
                  className="btn-main"
                  style={{
                    width: "640px",
                    borderRadius: "20px",
                  }}
                  value="Show Advanced Settings"
                />
                <div className="spacer-10"></div>

                <div className="spacer-10"></div>

                <p>eg.Background</p>
                <div className="spacer-10"></div>
                <input
                  type="button"
                  id="submit"
                  className="btn-main"
                  value="Add Property"
                />

                <div className="spacer-10"></div>
                <div className="spacer-10"></div>
                <div className="spacer-10"></div>
                <div className="spacer-10"></div>
                <div className="spacer-10"></div>
                <input
                  type="button"
                  id="submit"
                  className="btn-main"
                  value="Create NFT"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-xs-12">
            <h5>Preview item</h5>
            <div className="nft__item m-0">
              <div className="de_countdown">
                <Clock deadline="December, 30, 2021" />
              </div>
              <div className="author_list_pp">
                <span>
                  <img
                    className="lazy"
                    src="./img/author/author-1.jpg"
                    alt=""
                  />
                  <i className="fa fa-check"></i>
                </span>
              </div>
              <div className="nft__item_wrap">
                <span>
                  <img
                    src="./img/collections/coll-item-3.jpg"
                    id="get_file_2"
                    className="lazy nft__item_preview"
                    alt=""
                  />
                </span>
              </div>
              <div className="nft__item_info">
                <span>
                  <h4>Pinky Ocean</h4>
                </span>
                <div className="nft__item_price">
                  0.08 ETH<span>1/20</span>
                </div>
                <div className="nft__item_action">
                  <span>Place a bid</span>
                </div>
                <div className="nft__item_like">
                  <i className="fa fa-heart"></i>
                  <span>50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Createpage;

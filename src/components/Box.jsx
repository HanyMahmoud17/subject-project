import { Button, Stack, Typography, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Box = () => {
    const [uniId, setuniId] = useState(null);
    const [staId, setstaId] = useState(null);
    const [fucId, setfucId] = useState(null);
    const [speId, setspeId] = useState(null);
    const [levId, setlevId] = useState(null);
    const [subId, setsubId] = useState(null);

    const navigate = useNavigate();
    const [show, setshow] = useState(false);

    // fetch data
    const token = import.meta.env.VITE_API_TOKEN;
    // Universities
    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        axios
            .get(import.meta.env.VITE_API_URL + "/universities", {
                headers: {
                    Authorization: "Bearer " + token,
                },
                secure: false,
            })
            .then((res) => {
                setUniversities(res.data.data);
            })
            .catch((err) => {
                console.log(err); // Log any errors
            });
    }, [token]);

    const [stages, setStages] = useState([]);
    useEffect(() => {
        axios
            .get(import.meta.env.VITE_API_URL + "/stages", {
                headers: {
                    Authorization: "Bearer " + token,
                },
                secure: false,
            })
            .then((res) => {
                setStages(res.data.data);
            })
            .catch((err) => {
                console.log(err); // Log any errors
            });
    }, [token]);
    // Faculties
    const [faculties, setFaculties] = useState([]);
    const url =
        import.meta.env.VITE_API_URL +
        `/faculties?university_id=${uniId}&stage_id=${staId}`;
    useEffect(() => {
        axios
            .get(url, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((res) => {
                setFaculties(res.data.data);
            });
    }, [url, token]);

    // Specialties
    const [specialties, setspecialties] = useState([]);
    let url2 =
        import.meta.env.VITE_API_URL + `/specialties?faculty_id=${fucId}&university_id=${uniId}`
    useEffect(() => {
        // if (fucId && uniId) {
        axios
            .get(url2, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((res) => {
                setspecialties(res.data.data);
            });
        // }
    }, [url2, token]);

    // levels
    const [levels, setlevels] = useState([]);
    let url3 = import.meta.env.VITE_API_URL + `/levels?stage_id=${staId}`
    useEffect(() => {
        axios
            .get(url3, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((res) => {
                setlevels(res.data.data);
            });
    }, [url3, token]);
    // Search
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const res = await axios.get(
            import.meta.env.VITE_API_URL + "/subjects",
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
        setBooks(res.data.data);
    };

    const [search, setSearch] = useState("");
    const [filteredDocs, setFilteredDocs] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);
    useEffect(() => {
        if (search.length > 0 && search.charCodeAt(0) !== 32) {
            const newData =
                books &&
                books.filter((lawyer) => {
                    const name = lawyer.name.toLowerCase();

                    if (name.includes(search.toLowerCase())) {
                        return lawyer;
                    }
                });
            setFilteredDocs(newData);
        } else {
            setFilteredDocs([]);
        }
    }, [search, books]);

    // subject
    const [subject, setsubject] = useState([]);

    let url4 =
        import.meta.env.VITE_API_URL +
        `/subjects?level_id=${levId}&specialize_id=${speId}`;
    useEffect(() => {
        axios
            .get(url4, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((res) => {
                setsubject(res.data.data);
            });
    }, [url4, token]);

    // Delete text on change sun
    useEffect(() => {
        subId && setshow(false);
    }, [subId]);

    let url5 = import.meta.env.VITE_API_URL +
        `/counts?subject_id=${subId}`;

    const incrementCount = () => {
        axios
            .post(url5, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }) .then(response => {
                console.log(response.data); // Optional: Log the response from the server
              })
    };
    

    return (
        <Stack
            className="Box"
            boxShadow={
                "0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04)"
            }
            bgcolor={"white"}
            px={8}
            py={12}
            width={{ xs: "350px", sm: "500px", md: "800px" }}
            borderRadius={"8px"}
            data-aos="fade-down"
            mb={{ xs: 75, md: 0 }}
        >
            <Stack
                position={"relative"}
                data-aos="fade-up"
                data-aos-delay="500"
            >
                <input
                    type="text"
                    placeholder="أبحث برمز المقرر"
                    value={search}
                    className="search"
                    onChange={(e) => setSearch(e.target.value)}
                />
                {!search && (
                    <div className="icon">
                        <SearchSharpIcon
                            sx={{
                                color: "#7d57f3",
                            }}
                        />
                    </div>
                )}
                {filteredDocs.length > 0 && (
                    <Stack
                        position={"absolute"}
                        top={"105%"}
                        width={"100%"}
                        maxHeight={"200px"}
                        bgcolor={"#f4f7f8"}
                        zIndex={10}
                        borderRadius={"20px"}
                        overflow={"scroll"}
                    >
                        {filteredDocs.map((doc) => {
                            return (
                                <>
                                    <Link to={"/course/" + doc.id}>
                                        <Stack
                                            key={doc.id}
                                            p={"20px"}
                                            borderRadius={"20px"}
                                            sx={{
                                                "&:hover": {
                                                    bgcolor: "primary.main",
                                                    color: "white",
                                                    cursor: "pointer",
                                                },
                                            }}
                                        >
                                            {doc.name}
                                        </Stack>
                                    </Link>
                                </>
                            );
                        })}
                    </Stack>
                )}
            </Stack>

            <Stack
                zIndex={-1}
                alignItems={"center"}
                position={"relative"}
                my={8}
                data-aos="fade-up"
                data-aos-delay="750"
            >
                <span style={{ backgroundColor: '#7d57f3' }} className="line"></span>
                <span className="text">أو</span>
            </Stack>

            <div
                data-aos="fade-up"
                data-aos-delay="1000"
                style={{ zIndex: "-1" }}
            >

                <Stack className="options" mb={12}>
                    {universities.length > 0 && (
                        <FormControl sx={{ width: '100%', height: "50px", pb: 2, display: 'flex', alignItems: 'space-between', justifyContent: "center" }}>
                            <InputLabel sx={{
                                // textAlign: 'center',
                                width: '100%',
                                fontSize: "16px",
                                color: 'grey', // Set the default color for the label
                                "&.Mui-focused": {
                                    color: 'grey', // Set the color when the label is focused
                                }
                            }}
                                id="demo-simple-select-label">الجامعة</InputLabel>
                            <Select
                                value={uniId}
                                onChange={(e) => {
                                    setuniId(e.target.value);
                                }}
                                lable="age"
                                //defaultValue="" // Set the default value to an empty string
                                sx={{
                                    // textAlign: 'center', 

                                    // backgroundColor: "#F6F9FB",
                                    borderRadius: "20px",
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "transparent !important"
                                    },
                                    "&.MuiOutlinedInput-notchedOutline": {
                                        borderColor: "transparent !important"
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    color: "#7d57f3"
                                }}
                            >
                                {/* Render the default option manually */}

                                {universities.map((uni) => (
                                    <MenuItem sx={{ color: "#7d57f3" }} value={uni.id} key={uni.id}>
                                        {uni.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    {stages.length > 0 && (
                        <FormControl sx={{ width: '100%', height: "50px", pb: 2, display: 'flex', alignItems: 'space-between', justifyContent: "center" }}>
                            <InputLabel sx={{
                                // textAlign: 'center',
                                width: '100%',
                                fontSize: "16px",
                                color: 'grey', // Set the default color for the label
                                "&.Mui-focused": {
                                    color: 'grey', // Set the color when the label is focused
                                }
                            }}
                                id="demo-simple-select-label">المرحلة الدراسية</InputLabel>
                            <Select
                                value={staId}
                                onChange={(e) => {
                                    setstaId(e.target.value);
                                }}
                                lable="age"
                                //defaultValue="" // Set the default value to an empty string
                                sx={{
                                    // textAlign: 'center', 

                                    // backgroundColor: "#F6F9FB",
                                    borderRadius: "20px",
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "transparent !important"
                                    },
                                    "&.MuiOutlinedInput-notchedOutline": {
                                        borderColor: "transparent !important"
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    color: "#7d57f3"
                                }}
                            >
                                {/* Render the default option manually */}

                                {stages.map((sta) => (
                                    <MenuItem sx={{ color: "#7d57f3" }} value={sta.id} key={sta.id}>
                                        {sta.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                    {faculties.length > 0 && (
                        <FormControl sx={{ width: '100%', height: "50px", pb: 2, display: 'flex', alignItems: 'space-between', justifyContent: "center" }}>
                            <InputLabel sx={{
                                // textAlign: 'center',
                                width: '100%',
                                fontSize: "16px",
                                color: 'grey', // Set the default color for the label
                                "&.Mui-focused": {
                                    color: 'grey', // Set the color when the label is focused
                                }
                            }}
                                id="demo-simple-select-label">الكلية</InputLabel>
                            <Select
                                value={fucId}
                                onChange={(e) => {
                                    setfucId(e.target.value);
                                }}
                                disabled={!uniId && true}
                                //defaultValue="" // Set the default value to an empty string
                                sx={{
                                    // textAlign: 'center', 

                                    // backgroundColor: "#F6F9FB",
                                    borderRadius: "20px",
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "transparent !important"
                                    },
                                    "&.MuiOutlinedInput-notchedOutline": {
                                        borderColor: "transparent !important"
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    color: "#7d57f3"
                                }}
                            >
                                {/* Render the default option manually */}

                                {faculties.map((uni) => (
                                    <MenuItem sx={{ color: "#7d57f3" }} value={uni.id} key={uni.id}>
                                        {uni.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}

                    {specialties.length > 0 && faculties.length > 0 && (
                        <FormControl sx={{ width: '100%', height: "50px", pb: 2, display: 'flex', alignItems: 'space-between', justifyContent: "center" }}>
                            <InputLabel sx={{
                                // textAlign: 'center',
                                width: '100%',
                                fontSize: "16px",
                                color: 'grey', // Set the default color for the label
                                "&.Mui-focused": {
                                    color: 'grey', // Set the color when the label is focused
                                }
                            }}
                                id="demo-simple-select-label">التخصص</InputLabel>
                            <Select
                                value={speId}
                                onChange={(e) => {
                                    setspeId(e.target.value);
                                }}
                                disabled={!fucId && !uniId && true}
                                //defaultValue="" // Set the default value to an empty string
                                sx={{
                                    // textAlign: 'center', 

                                    // backgroundColor: "#F6F9FB",
                                    borderRadius: "20px",
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "transparent !important"
                                    },
                                    "&.MuiOutlinedInput-notchedOutline": {
                                        borderColor: "transparent !important"
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    color: "#7d57f3"
                                }}
                            >
                                {/* Render the default option manually */}

                                {specialties.map((uni) => (
                                    <MenuItem sx={{ color: "#7d57f3" }} value={uni.id} key={uni.id}>
                                        {uni.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                    {levels.length > 0 &&
                        specialties.length > 0 &&
                        faculties.length > 0 && (
                            <FormControl sx={{ width: '100%', height: "50px", pb: 2, display: 'flex', alignItems: 'space-between', justifyContent: "center" }}>
                                <InputLabel sx={{
                                    // textAlign: 'center',
                                    width: '100%',
                                    fontSize: "16px",
                                    color: 'grey', // Set the default color for the label
                                    "&.Mui-focused": {
                                        color: 'grey', // Set the color when the label is focused
                                    }
                                }}
                                    id="demo-simple-select-label">المستوى</InputLabel>
                                <Select
                                    value={levId}
                                    onChange={(e) => {
                                        setlevId(e.target.value);
                                    }}
                                    disabled={!speId && true}
                                    //defaultValue="" // Set the default value to an empty string
                                    sx={{
                                        // textAlign: 'center', 

                                        // backgroundColor: "#F6F9FB",
                                        borderRadius: "20px",
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "transparent !important"
                                        },
                                        "&.MuiOutlinedInput-notchedOutline": {
                                            borderColor: "transparent !important"
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        color: "#7d57f3"
                                    }}
                                >
                                    {/* Render the default option manually */}

                                    {levels.map((uni) => (
                                        <MenuItem sx={{ color: "#7d57f3" }} value={uni.id} key={uni.id}>
                                            {uni.level}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        )}

                    {levels.length > 0 &&
                        specialties.length > 0 &&
                        subject.length > 0 && (
                            <FormControl sx={{ width: '100%', height: "50px", pb: 2, display: 'flex', alignItems: 'space-between', justifyContent: "center" }}>
                                <InputLabel sx={{
                                    // textAlign: 'center',
                                    width: '100%',
                                    fontSize: "16px",
                                    color: 'grey', // Set the default color for the label
                                    "&.Mui-focused": {
                                        color: 'grey', // Set the color when the label is focused
                                    }
                                }}
                                    id="demo-simple-select-label">المقرر</InputLabel>
                                <Select
                                    value={subId}
                                    onChange={(e) => {
                                        setsubId(e.target.value);
                                    }}
                                    disabled={!levId && true}
                                    //defaultValue="" // Set the default value to an empty string
                                    sx={{
                                        // textAlign: 'center', 

                                        // backgroundColor: "#F6F9FB",
                                        borderRadius: "20px",
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "transparent !important"
                                        },
                                        "&.MuiOutlinedInput-notchedOutline": {
                                            borderColor: "transparent !important"
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        color: "#7d57f3"
                                    }}
                                >
                                    {/* Render the default option manually */}

                                    {subject.map((uni) => (
                                        <MenuItem sx={{ color: "#7d57f3" }} value={uni.id} key={uni.id}>
                                            {uni.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        )}
                </Stack>

            </div>
            <Stack
                zIndex={-3}
                direction={{ xs: "column", sm: "row" }}
                spacing={8}
                justifyContent={"center"}
                data-aos="fade-in"
                data-aos-delay="1250"
                alignItems={"center"}
            >
                <Button
                    variant="contained"
                    endIcon={<SearchIcon />}
                    sx={{
                        width: "fit-content",
                        p: "10px 100px",
                        borderRadius: "20px",
                        color: "white",
                        backgroundColor: "#7d57f3",
                        "&:hover": {
                            backgroundColor: "#7d57f3"
                        }
                    }}
                    onClick={() => {
                        subId ? navigate("/course/" + subId) : setshow(true);
                        incrementCount();
                    }}
                >
                    بحث ذكي
                </Button>
                <Button
                    variant="outlined"
                    endIcon={<RestartAltIcon />}
                    sx={{
                        width: "fit-content",
                        p: "10px 100px",
                        borderRadius: "20px",
                        color: "#7d57f3",
                        borderColor: "#7d57f3",
                        "&:hover": {
                            borderColor: "#7d57f3"
                        }
                    }}
                    onClick={() => window.location.reload()}
                >
                    إعادة البحث
                </Button>

            </Stack>

            {show && (
                <Typography
                    color="error"
                    sx={{
                        mt: 8,
                        textAlign: "center",
                        fontSize: "12px",
                    }}
                >
                    من فضلك تأكد من اختيار المقرر
                </Typography>
            )}
        </Stack>
    );
};

export default Box;

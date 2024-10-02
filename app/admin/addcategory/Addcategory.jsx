"use client";
import React, { useEffect, useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@nextui-org/react";
import axios from "axios";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import Loader from "@/_components/Loader";

const Editcategory = ({ id, onSetResult }) => {
    // console.log(id, "edit id");

    const [isOpen, setIsOpen] = React.useState(false);
    const [size, setSize] = React.useState("md");

    const [fetchsinglecategory, setfetchsinglecategory] = useState({
        maincategory: "",
        subcategory: "",
        adult: "",
        youth: "",
        percouple: "",
        childthreetoseven: "",
        childabovethree: "",
        childabovetwelve: "",
        childabovefour: "",
        description: ""
    });
    // console.log(fetchsinglecategory, "fetchsinglecategory");

    const [ratings, setratings] = useState("");
    // console.log(ratings, "ratings");

    const sizes = ["5xl"];

    async function getData() {
        const response = await axios.post("/api/category", {
            operation: "fetchsinglecategory",
            _id: id,
        });
        // console.log(response.data.fetchsinglecategory, "check response");
        setfetchsinglecategory(response.data.fetchsinglecategory);
        setratings(response.data.fetchsinglecategory.ratings);
    }

    const handleOpen = (size) => {
        getData();
        setSize(size);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handlerating = (value) => {
        setratings(value);
    };

    const validateNumericInput = (value) => {
        return /^[0-9]*$/.test(value);
    };

    const handleinputfield = (e) => {
        var name = e.target.name;
        var value = e.target.value;

        if (["adult", "youth", "percouple", "childthreetoseven"].includes(name)) {
            if (validateNumericInput(value)) {
                setfetchsinglecategory({ ...fetchsinglecategory, [name]: value });
            }
        } else {
            setfetchsinglecategory({ ...fetchsinglecategory, [name]: value });
        }
    };

    const handleeditcategory = async (e) => {
        e.preventDefault();

        const response = await axios.post("/api/category", {
            operation: "editcategory",
            _id: id,
            maincategory: fetchsinglecategory.maincategory,
            subcategory: fetchsinglecategory.subcategory,
            adult: fetchsinglecategory.adult,
            youth: fetchsinglecategory.youth,
            percouple: fetchsinglecategory.percouple,
            childthreetoseven: fetchsinglecategory.childthreetoseven,
            childabovethree: fetchsinglecategory.childabovethree,
            childabovetwelve: fetchsinglecategory.childabovetwelve,
            childabovefour: fetchsinglecategory.childabovefour,
            ratings: ratings,
            description: fetchsinglecategory.description
        });
        // console.log(response.data, "check edit response");
        setfetchsinglecategory(response.data);
        if (response.data.status === 200) {
            alert(response.data.message);
            // window.location.reload();
            onSetResult(response.data.result)
            setIsOpen(false)
        } else if (response.data.status === 401) {
            alert(response.data.message);
        }
    };

    const addrating = [
        { label: "0", value: "0" },
        { label: "0.5", value: "0.5" },
        { label: "1", value: "1" },
        { label: "1.5", value: "1.5" },
        { label: "2", value: "2" },
        { label: "2.5", value: "2.5" },
        { label: "3", value: "3" },
        { label: "3.5", value: "3.5" },
        { label: "4", value: "4" },
        { label: "4.5", value: "4.5" },
        { label: "5", value: "5" },
    ];

    return (
        <div>
            <div className="mt-[1rem]">
                {sizes.map((size) => (
                    <Button color="primary" key={size} onPress={() => handleOpen(size)}>
                        <span>
                            <Pencil className="w-[15px] h-[15px]" />
                        </span>{" "}
                        Edit
                    </Button>
                ))}
            </div>
            <Modal size={size} isOpen={isOpen} onClose={handleClose}>
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Modal Title
                        </ModalHeader>
                        <ModalBody>
                            <form>
                                <div className="grid grid-cols-3 gap-5">
                                    <div className="flex flex-col">
                                        <label>Main Category</label>
                                        <input
                                            type="text"
                                            onChange={handleinputfield}
                                            value={fetchsinglecategory.maincategory}
                                            name="maincategory"
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                            required
                                            disabled
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label>Sub Category</label>
                                        <input
                                            type="text"
                                            onChange={handleinputfield}
                                            value={fetchsinglecategory.subcategory}
                                            name="subcategory"
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                            disabled
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label>Adults Price</label>
                                        <input
                                            type="text"
                                            name="adult"
                                            value={fetchsinglecategory.adult}
                                            onChange={handleinputfield}
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label>Youth Price</label>
                                        <input
                                            type="text"
                                            name="youth"
                                            value={fetchsinglecategory.youth}
                                            onChange={handleinputfield}
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label>Per Couple Price</label>
                                        <input
                                            type="text"
                                            name="percouple"
                                            value={fetchsinglecategory.percouple}
                                            onChange={handleinputfield}
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label>Child (3 to 7 years) Price</label>
                                        <input
                                            type="text"
                                            name="childthreetoseven"
                                            value={fetchsinglecategory.childthreetoseven}
                                            onChange={handleinputfield}
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label>Child Above (3 years) Price</label>
                                        <input
                                            type="text"
                                            name="childabovethree"
                                            value={fetchsinglecategory.childabovethree}
                                            onChange={handleinputfield}
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label>Child Above (12 years) Price</label>
                                        <input
                                            type="text"
                                            name="childabovetwelve"
                                            value={fetchsinglecategory.childabovetwelve}
                                            onChange={handleinputfield}
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label>Child Above (4 years) Price</label>
                                        <input
                                            type="text"
                                            name="childabovefour"
                                            value={fetchsinglecategory.childabovefour}
                                            onChange={handleinputfield}
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                        />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className="text-gray-700">Description:</label>
                                        <textarea
                                            name="description"
                                            value={fetchsinglecategory.description}
                                            onChange={handleinputfield}
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label>Add Ratings</label>
                                        <Autocomplete
                                            key={ratings}
                                            defaultSelectedKey={ratings}
                                            onInputChange={handlerating}
                                            className="mt-2 p-2 font-light text-sm"
                                            variant="bordered"
                                            color="default"
                                            radius="md"
                                        >
                                            {addrating.map((addrating) => (
                                                <AutocompleteItem
                                                    key={addrating.value}
                                                    value={addrating.value}
                                                >
                                                    {addrating.label}
                                                </AutocompleteItem>
                                            ))}
                                        </Autocomplete>
                                    </div>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={handleClose}>
                                Close
                            </Button>
                            <Button color="primary" onClick={handleeditcategory}>
                                Submit
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </div>
    );
};

const AddCategory = () => {
    const [activeCategory, setActiveCategory] = useState("Tour");
    const [isOpen, setIsOpen] = React.useState(false);
    const [size, setSize] = React.useState("md");

    const [categorydata, setcategorydata] = useState({
        maincategory: "",
        subcategory: "",
        adult: "",
        youth: "",
        percouple: "",
        childthreetoseven: "",
        childabovethree: "",
        childabovetwelve: "",
        childabovefour: "",
        description: ""
    });
    // console.log(categorydata, "categorydata");

    const [ratings, setratings] = useState("0");
    // console.log(ratings, "ratings");

    const [maincategory, setmaincategory] = useState("Tour");
    // console.log(maincategory, "maincategory");

    const [fetchallcategory, setfetchallcategory] = useState([]);
    // console.log(fetchallcategory, "fetchallcategory");

    const sizes = ["5xl"];

    const handleOpen = (size) => {
        setSize(size);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handlerating = (value) => {
        setratings(value);
    };

    const validateNumericInput = (value) => {
        return /^[0-9]*$/.test(value);
    };

    const handlefilterdata = (category) => {
        setmaincategory(category);
        setActiveCategory(category);
    };

    const handleinputfield = (e) => {
        var name = e.target.name;
        var value = e.target.value;

        if (["adult", "youth", "percouple", "childthreetoseven"].includes(name)) {
            if (validateNumericInput(value)) {
                setcategorydata({ ...categorydata, [name]: value });
            }
        } else {
            setcategorydata({ ...categorydata, [name]: value });
        }
    };

    useEffect(() => {
        async function getData() {
            const response = await axios.post("/api/category", {
                operation: "fetchsinglemaincategory",
                maincategory: maincategory,
            });
            // console.log(response.data.fetchmaincategorydata, "check getData");
            setfetchallcategory(response.data.fetchmaincategorydata);
        }
        getData();

        if (maincategory) {
            getData();
        }
    }, [maincategory]);

    const handlesubmit = async (e) => {
        e.preventDefault();

        if (!categorydata.maincategory) {
            alert("please fill the category");
            return;
        }

        const response = await axios.post("/api/category", {
            operation: "addcategory",
            maincategory: categorydata.maincategory,
            subcategory: categorydata.subcategory,
            adult: categorydata.adult,
            youth: categorydata.youth,
            percouple: categorydata.percouple,
            childthreetoseven: categorydata.childthreetoseven,
            childabovethree: categorydata.childabovethree,
            childabovetwelve: categorydata.childabovetwelve,
            childabovefour: categorydata.childabovefour,
            ratings: ratings,
            description: categorydata.description
        });
        // console.log(response.data, "check response");
        if (response.data.status === 200) {
            alert(response.data.message);
            window.location.reload();
        } else if (response.data.status === 401) {
            alert(response.data.message);
        } else if (response.data.status === 500) {
            alert(response.data.messafe);
        } else {
            alert("please fill category field and prices");
        }
    };

    const deletecategory = async (id) => {
        const userconfirmed = window.confirm("are you sure");

        if (userconfirmed) {
            const response = await axios.post("/api/category", {
                operation: "deletecategory",
                _id: id,
            });
            // console.log(response.data, "check delete data");
            if (response.data.status === 200) {
                alert(response.data.message);
                window.location.reload();
            } else if (response.data.status === 401) {
                alert(response.data.message);
            }
        }
    };

    const addrating = [
        { label: "0", value: "0" },
        { label: "0.5", value: "0.5" },
        { label: "1", value: "1" },
        { label: "1.5", value: "1.5" },
        { label: "2", value: "2" },
        { label: "2.5", value: "2.5" },
        { label: "3", value: "3" },
        { label: "3.5", value: "3.5" },
        { label: "4", value: "4" },
        { label: "4.5", value: "4.5" },
        { label: "5", value: "5" },
    ];

    const [fetchsingletab, setfetchsingletab] = useState([]);
    // console.log(fetchsingletab, "fetchsingletab");

    const handlebtn = async () => {
        const response = await axios.post("/api/category", {
            operation: "fetchallcategory",
        });
        // console.log(response.data.fetchallcategory, "check data");
        setfetchsingletab(response.data.fetchallcategory);
    };

    useEffect(() => {
        handlebtn();
    }, []);

    const uniquetab = [
        ...new Set(fetchsingletab.map((item) => item.maincategory)),
    ];
    // console.log(uniquetab, "uniquetab");

    const handleSetResult = (val) => {
        setfetchallcategory(val)
    }

    return (
        <div>
            <div className="flex justify-end m-5">
                {/* {sizes.map((size) => (
                    <Button key={size} onPress={() => handleOpen(size)}>
                        <Plus className="size-5" />
                        Add Category
                    </Button>
                ))} */}
            </div>
            <Modal size={size} isOpen={isOpen} onClose={handleClose}>
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Modal Title
                        </ModalHeader>
                        <ModalBody>
                            <form>
                                <div className="grid grid-cols-3 gap-5">
                                    <div className="flex flex-col">
                                        <label>Main Category</label>
                                        <input
                                            type="text"
                                            onChange={handleinputfield}
                                            value={categorydata.maincategory}
                                            name="maincategory"
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label>Sub Category</label>
                                        <input
                                            type="text"
                                            onChange={handleinputfield}
                                            value={categorydata.subcategory}
                                            name="subcategory"
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label>Adults (16+ years) Price</label>
                                        <input
                                            type="text"
                                            name="adult"
                                            value={categorydata.adult}
                                            onChange={handleinputfield}
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label>Youth (7+ years) Price</label>
                                        <input
                                            type="text"
                                            name="youth"
                                            value={categorydata.youth}
                                            onChange={handleinputfield}
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label>Per Couple Price</label>
                                        <input
                                            type="text"
                                            name="percouple"
                                            value={categorydata.percouple}
                                            onChange={handleinputfield}
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label>Child (3 to 7 years) Price</label>
                                        <input
                                            type="text"
                                            name="childthreetoseven"
                                            value={categorydata.childthreetoseven}
                                            onChange={handleinputfield}
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label>Child Above (3 years) Price</label>
                                        <input
                                            type="text"
                                            name="childabovethree"
                                            value={categorydata.childabovethree}
                                            onChange={handleinputfield}
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label>Child Above (12 years) Price</label>
                                        <input
                                            type="text"
                                            name="childabovetwelve"
                                            value={categorydata.childabovetwelve}
                                            onChange={handleinputfield}
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label>Child Above (4 years) Price</label>
                                        <input
                                            type="text"
                                            name="childabovefour"
                                            value={categorydata.childabovefour}
                                            onChange={handleinputfield}
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                        />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className="text-gray-700">description:</label>
                                        <textarea
                                            name="description"
                                            value={categorydata.description}
                                            onChange={handleinputfield}
                                            className="border border-gray-300 mt-2 p-2 rounded-md font-light text-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label>Add Ratings</label>
                                        <Autocomplete
                                            defaultSelectedKey={ratings}
                                            onInputChange={handlerating}
                                            className="mt-2 p-2 font-light text-sm"
                                            variant="bordered"
                                            color="default"
                                            radius="md"
                                        >
                                            {addrating.map((addrating) => (
                                                <AutocompleteItem
                                                    key={addrating.value}
                                                    value={addrating.value}
                                                >
                                                    {addrating.label}
                                                </AutocompleteItem>
                                            ))}
                                        </Autocomplete>
                                    </div>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={handleClose}>
                                Close
                            </Button>
                            <Button color="primary" onClick={handlesubmit}>
                                submit
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>

            <div className="flex justify-start items-center w-[95%] mx-auto">
                <div className="flex gap-4 w-full lg:w-[65%]">
                    {uniquetab.map((category, index) => (
                        <div
                            key={index}
                            className={`flex justify-center items-center flex-1 rounded-2xl p-2 cursor-pointer text-center ${activeCategory === category
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200"
                                }`}
                            onClick={() => handlefilterdata(category)}
                        >
                            <p>{category}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  mt-5 gap-8 w-[95%] mx-auto">
                {fetchallcategory && fetchallcategory.length > 0 ? (
                    fetchallcategory.map((e) => (
                        <div
                            className="rounded-2xl p-6 bg-gray-200 flex flex-col h-full"
                            key={e._id}
                        >
                            <div className="flex-grow flex flex-col gap-2 lg:gap-5">
                                {e.subcategory && (
                                    <p className="font-semibold text-xl lg:text-2xl text-blue-500">
                                        {e.subcategory}
                                    </p>
                                )}
                                <div>
                                    {e.adult && (
                                        <p className="font-semibold mt-2">
                                            Adult Price:{" "}
                                            <span className="font-normal ml-1">{e.adult}</span>
                                        </p>
                                    )}
                                    {e.youth && (
                                        <p className="font-semibold mt-2">
                                            Youth Price:{" "}
                                            <span className="font-normal ml-1">{e.youth}</span>
                                        </p>
                                    )}
                                    {e.percouple && (
                                        <p className="font-semibold mt-2">
                                            Per couple Price:{" "}
                                            <span className="font-normal ml-1">{e.percouple}</span>
                                        </p>
                                    )}
                                    {e.childthreetoseven && (
                                        <p className="font-semibold mt-2">
                                            Child (3 to 7 years):{" "}
                                            <span className="font-normal ml-1">
                                                {e.childthreetoseven}
                                            </span>
                                        </p>
                                    )}
                                    {e.childabovetwelve && (
                                        <p className="font-semibold mt-2">
                                            Child Above (12 years):{" "}
                                            <span className="font-normal ml-1">
                                                {e.childabovetwelve}
                                            </span>
                                        </p>
                                    )}
                                    {e.childabovethree && (
                                        <p className="font-semibold mt-2">
                                            Child Above (3 years):{" "}
                                            <span className="font-normal ml-1">
                                                {e.childabovethree}
                                            </span>
                                        </p>
                                    )}
                                    {e.childabovefour && (
                                        <p className="font-semibold mt-2">
                                            Child Above (4 years):{" "}
                                            <span className="font-normal ml-1">
                                                {e.childabovefour}
                                            </span>
                                        </p>
                                    )}
                                    {e.childbelowseven && (
                                        <p className="font-semibold mt-2">
                                            Child Below (7 years):{" "}
                                            <span className="font-normal ml-1">
                                                {e.childbelowseven}
                                            </span>
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-[2rem]">
                                <Editcategory id={e._id} onSetResult={handleSetResult} />
                                <div>
                                    <Button
                                        className="mt-4 bg-gray-200 border-2 border-primary text-blue-700 font-medium"
                                        onClick={() => deletecategory(e._id)}
                                    >
                                        <span>
                                            <Trash2 className="w-[15px] h-[15px]" />
                                        </span>{" "}
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <>
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                    </>
                )}
            </div>
        </div>
    );
};

export default AddCategory;

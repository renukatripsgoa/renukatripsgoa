
import { connection } from "@/lib/dbconnection"
import { Tour } from "@/app/modal/tour/tour";
import { NextResponse } from "next/server";

export async function GET(req) {

    try {

        await connection();

        let maincategory = req.nextUrl.searchParams.get('maincategory');

        let subcategory = req.nextUrl.searchParams.get('subcategory');

        let result = [];

        let resultByCategory = []

        result = await Tour.find();

        resultByCategory = await Tour.find({ maincategory: maincategory, subcategory: subcategory });

        return NextResponse.json({ result: result, resultByCategory: resultByCategory, status: 200, success: true })

    } catch (error) {

        return NextResponse.json({ status: 500, success: false })

    }

}

export async function POST(request) {

    const payload = await request.json();
    await connection();

    if (payload.operation === "addcategory") {
        try {

            const { maincategory, subcategory, adult, youth, percouple, childbelowseven, childthreetoseven, childabovethree, childabovetwelve, childabovefour, ratings, description } = payload;
            // console.log(payload, "payload");

            const newCategory = new Tour({
                maincategory: maincategory,
                subcategory: subcategory,
                adult: adult,
                youth: youth,
                percouple: percouple,
                childthreetoseven: childthreetoseven,
                childabovethree: childabovethree,
                childabovetwelve: childabovetwelve,
                childabovefour: childabovefour,
                ratings: ratings,
                childbelowseven: "No Charge",
                description:description
            })

            await newCategory.save();
            // console.log(newCategory, "newCategory");

            return NextResponse.json({ status: 200, message: "Category added succesfully", newCategory })

        } catch (error) {
            console.error("Error during user registration:", error);
            return NextResponse.json({ status: 500, message: "An error occurred during registration" });
        }
    }
    else if (payload.operation === "editcategory") {
        try {

            const { _id, adult, youth, percouple, childbelowseven, childthreetoseven, childabovethree, childabovetwelve, childabovefour, ratings, description } = payload;
            // console.log(payload, "edit payload");

            const editcategory = await Tour.findByIdAndUpdate(_id, {
                adult: adult,
                youth: youth,
                percouple: percouple,
                childthreetoseven: childthreetoseven,
                childabovethree: childabovethree,
                childabovetwelve: childabovetwelve,
                childabovefour: childabovefour,
                ratings: ratings,
                childbelowseven: "No Charge",
                description:description
            });
            // console.log(editcategory, "editcategory");

            const result = await Tour.find();

            if (!editcategory) {
                return NextResponse.json({ status: 401, message: "Category not found" })
            }

            return NextResponse.json({ status: 200, message: "category updated successfully",  editcategory, result: result})

        } catch (error) {
            console.error("Error during user registration:", error);
            return NextResponse.json({ status: 500, message: "An error occurred during registration" });
        }
    }
    else if (payload.operation === "deletecategory") {
        try {

            const { _id } = payload;
            // console.log(payload, "delete payload");

            const deletecategory = await Tour.findByIdAndDelete(_id);
            // console.log(deletecategory, "deletecategory");

            if (!deletecategory) {
                return NextResponse.json({ status: 401, message: "category not found" });
            }

            return NextResponse.json({ status: 200, message: "category delete successfully" })

        } catch (error) {
            console.error("Error during user registration:", error);
            return NextResponse.json({ status: 500, message: "An error occurred during registration" });
        }
    }
    else if (payload.operation === "fetchallcategory") {
        try {

            const fetchallcategory = await Tour.find({});
            // console.log(fetchallcategory, "fetchallcategory");

            if (!fetchallcategory) {
                return NextResponse.json({ status: 401, message: "No Categories found" });
            }

            return NextResponse.json({ status: 200, message: "fetch all categories", fetchallcategory })

        } catch (error) {
            console.error("Error during user registration:", error);
            return NextResponse.json({ status: 500, message: "An error occurred during registration" });
        }
    }
    else if (payload.operation === "fetchsinglecategory") {
        try {

            const { _id } = payload;
            // console.log(payload, "check Id");

            const fetchsinglecategory = await Tour.findById(_id);
            // console.log(fetchsinglecategory, "fetchsinglecategory");

            if (!fetchsinglecategory) {
                return NextResponse.json({ status: 401, message: "category not found" })
            }

            return NextResponse.json({ status: 200, message: "fetch single category successfully", fetchsinglecategory })
        }
        catch (error) {
            console.error("Error during user registration:", error);
            return NextResponse.json({ status: 500, message: "An error occurred during registration" });
        }
    }
    else if (payload.operation === "fetchcategorywisedata") {
        try {

            const { maincategory, subcategory } = payload;
            // console.log(payload, "maincategory payload");

            const fetchmaincategorydata = await Tour.findOne({ maincategory, subcategory });
            // console.log(fetchmaincategorydata, "fetchmaincategorydata");

            if (!fetchmaincategorydata) {
                return NextResponse.json({ status: 401, message: "maincategoery not found" });
            }

            return NextResponse.json({ status: 200, message: "maincategory data fetch successfully", fetchmaincategorydata })

        } catch (error) {
            console.error("Error during user registration:", error);
            return NextResponse.json({ status: 500, message: "An error occurred during registration" });
        }
    }
    else if (payload.operation === "fetchsinglemaincategory") {
        try {
            const { maincategory } = payload;
            // console.log(payload, "maincategory payload");

            const fetchmaincategorydata = await Tour.find({ maincategory });
            // console.log(fetchmaincategorydata, "fetchmaincategorydata");

            if (!fetchmaincategorydata) {
                return NextResponse.json({ status: 401, message: "maincategoery not found" });
            }

            return NextResponse.json({ status: 200, message: "maincategory data fetch successfully", fetchmaincategorydata })
        } catch (error) {
            console.error("Error during user registration:", error);
            return NextResponse.json({ status: 500, message: "An error occurred during registration" });
        }
    }
    else if (payload.operation === "fetchsinglemaincategory") {
        try {
            const { maincategory } = payload;
            // console.log(payload, "maincategory payload");

            const fetchmaincategorydata = await Tour.find({ maincategory });
            // console.log(fetchmaincategorydata, "fetchmaincategorydata");

            if (!fetchmaincategorydata) {
                return NextResponse.json({ status: 401, message: "maincategoery not found" });
            }

            return NextResponse.json({ status: 200, message: "maincategory data fetch successfully", fetchmaincategorydata })
        } catch (error) {
            console.error("Error during user registration:", error);
            return NextResponse.json({ status: 500, message: "An error occurred during registration" });
        }
    }
}

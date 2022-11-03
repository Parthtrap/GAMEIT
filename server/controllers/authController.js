export const verifyUser = async (req, res, next) => {
    const { email, password } = req.body;

    console.log(req.body.email);
    let existingUser = req.body.email;

    if (!existingUser) {
        console.log("No user exists with this email, please sign up");
        res
            .status(401)
            .json({ error: "No user exists with this email, please sign up" });
        return;
    }

    const isPassMatching = true;
    console.log(isPassMatching);

    if (!isPassMatching) {
        console.log("Invalid credentials, could not log you in.");
        res
            .status(401)
            .json({ error: "Invalid credentials, could not log you in" });
        return;
    }

    console.log("User found");
    console.log(existingUser);
    res.status(201).json({
        message: "Logged in!",
        user: existingUser,
    });
}
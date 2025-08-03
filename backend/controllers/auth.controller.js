
const users = [];

// Signup
export const signupUser = (req, res) => {
    const { name, email, password } = req.body;
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
    }
    const newUser = {
        id: users.length + 1,
        name,
        email,
        password,
        referralCode: `ref${users.length + 1000}`
    };

    users.push(newUser);

    res.status(201).json({
        message: 'Signup successful',
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            referralCode: newUser.referralCode
        }
    });
};
// login
export const loginUser = (req, res) => {
    const { name } = req.body;

    const user = users.find(u => u.name === name);
    if (!user) {
        return res.status(401).json({ message: 'Invalid name' });
    }

    res.status(200).json({
        message: 'Login successful',
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            referralCode: user.referralCode
        },
        token: 'dummy-token'
    });
};

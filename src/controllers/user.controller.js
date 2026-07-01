const users = [
            {
                _id: 1,
                name: "Surakshya Khatri",
                categoryId: 1,
            },
            {
                _id: 2,
                name: "Kranti Pariyar",
                categoryId: 2,
            },
            {
                _id: 3,
                name: "Nishant Shakya",
                categoryId: 4,
            },
            {
                _id: 5,
                name: "Ankit Shrivastav",
                categoryId: 3,
            },
        ];

export const getAll = (req, res) => {

    const query = req.query;
    console.log(query);
    console.log(req.path);
    console.log(req.url);
    console.log(req.originalUrl);

    res.json({
        message: "Users Fetched",
        success: true,
        data: users,
  
    });
};

export const getById = (req, res) => {
    const {id} = req.params;
    const user = users.find((user) => Number(user._id) === Number(id));

    if(!user) {
        res.json({
        message: `user by id: ${id} not found`,
        success: false,
        data: null,
    });
    }
    res.json({
        message: `user: ${id} fetched`,
        success: true,
        data: user,
    });
};

export const create = (req, res) => {
    console.log(req.body);
    const data = req.body;

    users.push({
        ...data,
        _id: users.length + 1,
    });
    res.json({
        message: "Users Created",
        success: true,
        data: users[users.length - 1],
    });
};

export const update = (req, res) => {
    const {id} = req.params;
    const data = req.body;

    const index = users.findIndex((user) => user._id === Number(id));

    if(index === -1) {
        res.json({
            message: `user by id: ${id} not found`,
            success: true,
            data: null,
        });
        return;
    }

    users[index] = {
        ...users[index],
        ...data,
    };

    res.json({
        message: `user: ${id} updated`,
        success: true,
        data: users[index],
    });
};

export const remove = (req, res) => {
    const {id} = req.params;

    const index = users.findIndex((user) => user._id === Number(id));

        if(index === -1) {
        res.json({
            message: `user by id: ${id} not found`,
            success: true,
            data: null,
        });
        return;
    }

    users.splice(index, 1);
    res.json({
        message: `Users: ${id} deleted`,
        success: true,
        data: null,
    });
};
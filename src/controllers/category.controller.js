const categories = [
              {
                _id: 1,
                name: "Student"
            },
            {
                _id: 2,
                name: "Teacher"
            },
            {
                _id: 3,
                name: "Coordinator"
            },
            {
                _id: 4,
                name: "Founder"
            },
        ];

export const getAll= (req, res) => {
    res.json({
        message: "Categories Sucessfully Fetched",
        success: true,
        data: categories,
    });
};

export const getById = (req, res) => {
    const {id} = req.params;
    const category = categories.find((category) => Number(category._id) === Number(id));

    if(!category) {
        res.json({
        message: `Category by id: ${id} not found`,
        success: false,
        data: null,
    });
    }
    res.json({
        message: `Category: ${id} Successfully Fetched`,
        success: true,
        data: category,
    });
};

export const create = (req, res) => {
    console.log(req.body);
    const data = req.body;

    categories.push({
        ...data,
        _id: categories.length + 1,
    });
    res.json({
        message: "Categories Successfully Created",
        success: true,
        data: categories[categories.length - 1],
    });
};

export const update = (req, res) => {
    const {id} = req.params;
    const data = req.body;

    const index = categories.findIndex((category) => category._id === Number(id));

    if(index === -1) {
        res.json({
            message: `Category by id: ${id} not found`,
            success: true,
            data: null,
        });
        return;
    }

    categories[index] = {
        ...categories[index],
        ...data,
    };

    res.json({
        message: `Category: ${id} Successfully Updated`,
        success: true,
        data: categories[index],
    });
};

export const remove = (req, res) => {
    const {id} = req.params;
    const index = categories.findIndex((Category) => category._id === Number(id));

        if(index === -1) {
        res.json({
            message: `Category by id: ${id} not found`,
            success: true,
            data: null,
        });
        return;
    }

    categories.splice(index, 1);
    res.json({
        message: `Category: ${id} Successfully Deleted`,
        success: true,
        data: null,
    });
};
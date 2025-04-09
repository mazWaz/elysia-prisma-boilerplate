import { t } from 'elysia';

// Regex for validating latitude and longitude in the format "latitude,longitude"
const locationRegex = /^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/;

export const createLocation = t.Object({
    location: t.String({
        example: '-7.2913648,112.7391377',
        description: 'Latitude and Longitude of the location (comma-separated)',
        pattern: `^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?((1[0-7]\\d|\\d{1,2})(\\.\\d+)?|180(\\.0+)?)$`
    }),
    user_carId: t.String({
        example: '01JJ97STM2GBSDMNP5GNQJQB5W',
        description: 'User car ID provided'
    })
});

export const CreateLocationResponse = {
    200: t.Object({
        data: t.Object({
            id: t.String(),
            location: t.String(),
            user_carId: t.String(),
            createdAt: t.String(),
            updatedAt: t.String(),
        }),
        message: t.String({ default: 'Car data has been inserted' })
    }),
    400: t.Object({ message: t.String({ default: 'Insert car data failed'}) })
};

export const updateLocation = t.Object({
    location: t.String({
        example: '-7.2913648,112.7391377',
        description: 'Latitude and Longitude of the location (comma-separated)',
        pattern: `^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?((1[0-7]\\d|\\d{1,2})(\\.\\d+)?|180(\\.0+)?)$`
    }),
    user_carId: t.String({
        example: '01JJ97STM2GBSDMNP5GNQJQB5W',
        description: 'User car ID provided'
    })
});

export const UpdateLocationResponse = {
    200: t.Object({
        data: t.Any(),
        message: t.String({ default: 'Location data has been updated' })
    }),
    400: t.Object({ message: t.String({ default: 'Update data is failed'}) })
};

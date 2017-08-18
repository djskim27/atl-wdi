CREATE TABLE apartments(
    id SERIAL PRIMARY KEY,
    apt_num INTEGER,
    bedroom_num INTEGER,
    bathroom_num NUMERIC,
    address TEXT NOT NULL,
    tenant VARCHAR(255),
    occupied BOOLEAN,
    sq_ft NUMERIC,
    price MONEY
);

CREATE TABLE offices(
    id SERIAL PRIMARY KEY.
    office_num NUMERIC,
    num_floors NUMERIC,
    sq_ft NUMERIC,
    num_cubicles NUMERIC,
    address TEXT NOT NULL,
    company VARCHAR(255),
    occupied BOOLEAN,
    price MONEY
);

CREATE TABLE storefronts(
    id SERIAL PRIMARY KEY,
    address TEXT NOT NULL,
    occupied BOOLEAN,
    price MONEY,
    kitchen BOOLEAN,
    sq_ft NUMERIC,
    owner VARCHAR(255),
    outdoor_seat BOOLEAN DEFAULT FALSE
);
// Copyright (c) Toolbi. All rights reserved.
// See the LICENSE file in the project root for details.

import { Config } from "jest";

const config: Config = {
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
};

export default config;

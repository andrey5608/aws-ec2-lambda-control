/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { EC2Client } from "@aws-sdk/client-ec2";
export const REGION = 'eu-north-1'; // enter your region here
export const client = new EC2Client({ region: REGION, logger: console });
export default client;
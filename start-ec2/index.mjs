import client from "../client/client.mjs";
import { StartInstancesCommand } from "@aws-sdk/client-ec2";
import { INSTANCE_ID } from "../data.mjs"

export const handler = async () => {
  const command = new StartInstancesCommand({
    // Use DescribeInstancesCommand to find InstanceIds
    InstanceIds: [INSTANCE_ID],
    DryRun: false,
  });
  try {
    const { StartingInstances } = await client.send(command);
    const instanceIdList = StartingInstances.map(
      (instance) => ` • ${instance.InstanceId}`
    );
    console.log("Starting instances:");
    console.log(instanceIdList.join("\n"));
  } catch (err) {
    console.error(err);
  }
};

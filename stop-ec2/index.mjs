import client from "../client/client.mjs";
import { StopInstancesCommand } from "@aws-sdk/client-ec2";
import { INSTANCE_ID } from "../data.mjs"

export const handler = async () => {
  const stopCommand = new StopInstancesCommand({
    // Use DescribeInstancesCommand to find InstanceIds
    InstanceIds: [INSTANCE_ID],
    DryRun: false,
  });
  try {
    const { StoppingInstances } = await client.send(stopCommand);
    const instanceIdList = StoppingInstances.map(
      (instance) => ` • ${instance.InstanceId}`
    );
    console.log("Stopping instances:");
    console.log(instanceIdList.join("\n"));
  } catch (err) {
    console.error(err);
  }
};

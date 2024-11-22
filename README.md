# Flow Simulation App

This is a React-based application that simulates a decision-making process flow involving sending reminder emails and checking renewal decisions. The application visualizes the flow and logs each step of the process in real-time.

---

## Features

- **Dynamic Flow Visualization**:

  - A tree structure representing the flow process.

- **Logging System**:

  - Displays real-time logs of actions performed during the flow.
  - Provides a button to view all stored logs.

- **Simulated Workflow**:

  - Sends "Reminder Emails."
  - Randomly decides renewal success or failure.

- **Customization**:
  - The no. of remainders to be sent can be easily changed in the code, changing the depth of tree

    <img src="https://github.com/user-attachments/assets/74995e6e-4ac0-4543-980a-44f38263d8ce" width="700" height="auto" />
    <img src="https://github.com/user-attachments/assets/03f7d14e-3b3e-457a-bcb0-da6bd7b96566" width="700" height="auto" />


## How It Works

### 1. **Rendering the Flow Tree**

- The flow diagram is dynamically generated as a tree structure using the `renderTree` function.
- Each level in the tree corresponds to a reminder email attempt, and the depth is determined by the `availableRemainders` value.

### 2. **Simulating the Flow**

- When the **Start Flow** button is clicked:
  - The `simulateFlow` function starts the simulation.
  - A reminder email is sent using the `sendRemainder` function, and a renewal decision is made using the `renewalDecision` function.
  - If the renewal is successful, the process stops. If not, it continues until the available attempts are exhausted.

### 3. **Logging**

- Each action in the flow (e.g., sending a reminder, renewal success/failure) is logged with a timestamp.
- Logs are displayed in a scrollable section in the UI and are also sent to the `storeLog` API for storage after the simulation completes.

### 5. **Viewing All Logs**

- The **View All Logs** button navigates to a separate page where users can view all stored logs for past simulations.

### Workflow Summary

1. Start the flow by clicking the **Start Flow** button.
2. Watch the flow diagram as the simulation progresses:
   - Logs are updated in real-time.
3. View all logs after the simulation ends by navigating to the logs page.

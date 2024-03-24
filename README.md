**README: How to Run the Apartments Application**

This guide provides instructions on how to set up and run the Apartments application locally using Docker Compose.

### Prerequisites
- Docker installed on your machine. You can download and install Docker from [here](https://www.docker.com/get-started).

### Getting Started
1. Clone the repository containing the Apartments application to your local machine.

    ```
    git clone https://github.com/Shending-Help/apartments-api.git
    ```

2. Navigate to the root directory of the cloned repository.

    ```
    cd apartments-api
    ```

3. Ensure that your Docker service is up and running.

### Running the Application
Follow these steps to run the Apartments application:

1. **Build and Start Docker Containers**: Execute the following command to build and start the Docker containers defined in the `docker-compose.yml` file:

    ```
    cd docker-services
    docker-compose up -d
    ```

    This command will download necessary Docker images, build custom images (if applicable), and start the containers in detached mode.(omit -d first time to see logs)

2. **Accessing the Application**:
    - The API service will be accessible at [http://localhost:8080](http://localhost:8080).
    - The UI service will be accessible at [http://localhost:4200](http://localhost:4200).

3. **Stopping the Application**:
    - To stop the running containers, execute the following command:

        ```
        docker-compose down
        ```

    - This command will stop and remove the Docker containers while keeping the data volumes intact.

### Configuration
- The `docker-compose.yml` file defines the configuration for the Docker services required by the Apartments application.
- Environment variables such as database credentials and connection settings are configured within the Docker Compose file.
- Ensure that the port mappings for the services (`apartments-api`, `apartments-ui`) do not conflict with other services running on your machine.

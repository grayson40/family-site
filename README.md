# Family Website

This is a full stack project built with Django, Django Rest Framework, React, and Material-UI.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Python](https://www.python.org/downloads/), [Node.js and npm](https://nodejs.org/en/download/).
- You have read [Django](https://docs.djangoproject.com/en/3.2/intro/tutorial01/) and [React](https://reactjs.org/tutorial/tutorial.html) documentation.

To install, follow these steps:

1. Clone the repository:
    ```
    git clone https://github.com/grayson40/family-site.git
    ```

2. Navigate into the project directory:
    ```
    cd family-site
    ```

3. Install the dependencies:

    - For backend:
        ```
        cd backend
        python3 -m venv env
        ```

        - Activate the virtual environment:

            - On Unix or MacOS:
                ```
                source env/bin/activate
                ```

            - On Windows:
                ```
                .\env\Scripts\activate
                ```

        - Install the dependencies:
            ```
            pip install -r requirements.txt
            ```

    - For frontend:
        ```
        cd frontend
        npm install
        ```

## Running the Application

To use the Application, follow these steps:

1. Start the backend server:

    - Navigate to the backend directory:
        ```
        cd backend
        ```

    - Run the server:
        ```
        python manage.py runserver
        ```

2. Start the frontend server:

    - Navigate to the frontend directory:
        ```
        cd frontend
        ```

    - Start the development server:
        ```
        npm start
        ```

3. Open your browser and navigate to `http://localhost:3000`.

## Contributing to Family Website

To contribute to Family Website, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

## Contact

If you want to contact me, you can reach me at `graysoncrozier40@gmail.com`.

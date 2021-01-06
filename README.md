# Repo Template
Default Repository Template for all new Repos

## Getting Started

1. `package.json`

    * Update `name` from 'repo-template' to the project's name
        ```json
        "name": "sample project"
        ```
    * Update `description` to better match the description of the project
        ```json
        "description": "A sample project to create some really awesome code in"
        ```
    * Update `keywords` to include relevant keywords to the project
        ```json
        "keywords": [
            "enigmatic projects",
            "ec proj",
            "sample"
            "ec sample"
        ]
        ```

2. Install Dependencies

    ```sh
    $ npm i

    # or if yarn is installed
    $ yarn i
    ```

3. Create your files in `/lib`

    This is where all of the Project's Source files live. Make sure are you are creating them to make proper comments and documentation for the source code.

4. Create your tests in `/tests`

    Make sure you are creating tests for your projects, buggy code is not acceptable code. Tests will be required to pass along with a code review in order to make it to the main branch, and be auto-deployed.

5. Update `/docs`

    Include all relevant markdown (`.md`) files that include descriptions of the code being described in it.

6. Update `/examples`

    Include relevant examples for the code base so developers can have a reference for sample projects.
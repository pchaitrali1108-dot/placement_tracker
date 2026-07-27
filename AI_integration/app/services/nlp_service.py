TECH_SKILLS_DB = {
    "python",
    "java",
    "c++",
    "c",
    "react",
    "node.js",
    "express",
    "mongodb",
    "sql",
    "fastapi",
    "docker",
    "git",
    "html",
    "css",
    "javascript",
    "typescript",
    "scikit-learn",
    "pytorch",
    "tensorflow",
    "rest api",
    "figma"
}


def analyze_skills_and_gaps(resume_text: str, jd_text: str):
    resume_text = resume_text.lower()
    jd_text = jd_text.lower()

    matched_skills = []
    missing_skills = []

    for skill in TECH_SKILLS_DB:

        # Skill is required by the job description
        if skill in jd_text:

            # Skill exists in both JD and resume
            if skill in resume_text:
                matched_skills.append(skill)

            # Skill is required but absent from resume
            else:
                missing_skills.append(skill)

    return matched_skills, missing_skills
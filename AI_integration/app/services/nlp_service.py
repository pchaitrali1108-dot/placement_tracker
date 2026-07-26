import spacy

nlp = spacy.load("en_core_web_sm")

TECH_SKILLS_DB = {
    "python", "java", "c++", "c", "react", "node.js", "express", "mongodb",
    "sql", "fastapi", "docker", "git", "html", "css", "javascript", "typescript",
    "scikit-learn", "pytorch", "tensorflow", "rest api", "figma"
}

def analyze_skills_and_gaps(resume_text: str, jd_text: str):
    resume_doc = nlp(resume_text.lower())
    jd_doc = nlp(jd_text.lower())

    resume_tokens = {token.text for token in resume_doc}
    jd_tokens = {token.text for token in jd_doc}

    # Match skills against tech database
    matched = list(TECH_SKILLS_DB.intersection(resume_tokens).intersection(jd_tokens))
    missing = list(TECH_SKILLS_DB.intersection(jd_tokens) - resume_tokens)

    return matched, missing
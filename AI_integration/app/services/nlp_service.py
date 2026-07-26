import spacy
from app.config import TECH_SKILLS_DB

nlp = spacy.load("en_core_web_sm")

def analyze_skills_and_gaps(resume_text: str, jd_text: str):
    resume_skills = {word for word in TECH_SKILLS_DB if word in resume_text.lower()}
    jd_skills = {word for word in TECH_SKILLS_DB if word in jd_text.lower()}

    matched_skills = list(resume_skills.intersection(jd_skills))
    missing_skills = list(jd_skills - resume_skills)

    return matched_skills, missing_skills
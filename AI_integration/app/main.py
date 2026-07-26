from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from app.services.pdf_service import extract_text_from_pdf
from app.services.match_service import calculate_semantic_similarity
from app.services.nlp_service import analyze_skills_and_gaps

app = FastAPI(title="Placement Tracker AI Engine", version="2.0")

@app.post("/api/v1/screen-resume")
async def screen_resume(
    file: UploadFile = File(...),
    job_description: str = Form(...)
):
    if not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files supported.")

    file_bytes = await file.read()
    resume_text = extract_text_from_pdf(file_bytes)

    if not resume_text:
        raise HTTPException(status_code=400, detail="Could not extract text from PDF.")

    match_score = calculate_semantic_similarity(resume_text, job_description)
    matched_skills, missing_skills = analyze_skills_and_gaps(resume_text, job_description)

    status = "Strong Match" if match_score >= 75 else ("Moderate Match" if match_score >= 50 else "Low Match")

    return {
        "match_percentage": match_score,
        "match_status": status,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills,
        "summary": f"Candidate matches {len(matched_skills)} required skills. Missing {len(missing_skills)} key skills."
    }
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

# Load model once at startup
model = SentenceTransformer('all-MiniLM-L6-v2')

def calculate_semantic_similarity(resume_text: str, jd_text: str) -> float:
    embeddings = model.encode([resume_text, jd_text])
    score = cosine_similarity([embeddings[0]], [embeddings[1]])[0][0] * 100
    return round(float(score), 2)
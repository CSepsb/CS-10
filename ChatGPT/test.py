import requests
import PyPDF2
import openai
import re

# set up OpenAI API key and model
openai.api_key = "YOUR API KEY HERE"
model_engine = "davinci"

# function to download and extract text from PDF file
def extract_text_from_pdf(url):
    response = requests.get(url)
    with open("pdf_file.pdf", "wb") as f:
        f.write(response.content)
    pdf_file = open("pdf_file.pdf", "rb")
    pdf_reader = PyPDF2.PdfFileReader(pdf_file)

    # extract text from all pages of PDF
    text = ""
    for page_num in range(pdf_reader.getNumPages()):
        page_obj = pdf_reader.getPage(page_num)
        text += page_obj.extractText()

    # remove non-alphanumeric characters and newlines
    text = re.sub("[^a-zA-Z0-9\n\.]", " ", text)
    text = text.replace("\n", " ").replace("\r", " ").replace("  ", " ")
    return text

# function to generate OpenAI API response
def generate_chatbot_response(input_text):
    prompt = "PDF text: " + input_text
    response = openai.Completion.create(
        engine=model_engine,
        prompt=prompt,
        max_tokens=60,
        n=1,
        stop=None,
        temperature=0.8,
    )
    return response.choices[0].text.strip()

# main function for user interaction
def main():
    url = input("Enter the URL of the PDF file: ")
    pdf_text = extract_text_from_pdf(url)
    print("Chatbot: Hello! This is a chatbot that can answer your questions about the PDF you provided. Feel free to ask me anything!\n")
    while True:
        user_input = input("User: ")
        if user_input.lower() in ["bye", "goodbye", "exit"]:
            print("Chatbot: Goodbye!")
            break
        else:
            chatbot_response = generate_chatbot_response(user_input + " " + pdf_text)
            print("Chatbot: " + chatbot_response + "\n")

if __name__ == "__main__":
    main()


# function to download and extract text from PDF file
def extract_text_from_pdf(url):
    response = requests.get(url)
    with open("pdf_file.pdf", "wb") as f:
        f.write(response.content)
    pdf_file = open("pdf_file.pdf", "rb")
    pdf_reader = PyPDF2.PdfReader(pdf_file)

    # extract text from all pages of PDF
    text = ""
    for page_num in range(len(pdf_reader.pages)):
        text += pdf_reader.pages[page_num].extract_text()

    # remove non-alphanumeric characters and newlines
    text = re.sub("[^a-zA-Z0-9\n\.]", " ", text)
    text = text.replace("\n", " ").replace("\r", " ").replace("  ", " ")
    return text

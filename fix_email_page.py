import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Remove the incorrectly placed one
content = content.replace("  const [isModalOpen, setIsModalOpen] = useState(false);\n", "", 1)

# Add it inside LinkedInEmailPage
target_str = "const LinkedInEmailPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {\n"
new_str = target_str + "  const [isModalOpen, setIsModalOpen] = useState(false);\n"

content = content.replace(target_str, new_str)

with open('src/App.tsx', 'w') as f:
    f.write(content)


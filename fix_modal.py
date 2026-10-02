import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Let's see where the state is defined.
# I used replace on "const [isSummary, setIsSummary] = useState(false);"
# Let's check if it's there.
if "const [isModalOpen, setIsModalOpen] = useState(false);" not in content:
    old_state = "const [isSummary, setIsSummary] = useState(false);"
    new_state = """const [isSummary, setIsSummary] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);"""
    content = content.replace(old_state, new_state, 1)

# Ensure X is imported from lucide-react
import_match = re.search(r"import\s+\{([^}]+)\}\s+from\s+'lucide-react';", content)
if import_match:
    imports = import_match.group(1)
    if "X" not in imports:
        new_imports = imports + ", X"
        content = content.replace(imports, new_imports)

with open('src/App.tsx', 'w') as f:
    f.write(content)


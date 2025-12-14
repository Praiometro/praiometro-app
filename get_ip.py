import socket
import os

def obter_ip_lan():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        return s.getsockname()[0]
    except Exception:
        return "127.0.0.1"
    finally:
        s.close()

def update_network_security_config(ip_address, config_file_path):
    try:
        with open(config_file_path, 'r') as f:
            content = f.read()

        if f"<domain includeSubdomains=\"true\">{ip_address}</domain>" in content:
            print(f"IP address {ip_address} already exists in {config_file_path}")
            return

        closing_tag_with_indent = "    </domain-config>"
        if closing_tag_with_indent not in content:
            print(f"Error: {closing_tag_with_indent} not found in {config_file_path}")
            return

        new_domain_entry = f"        <domain includeSubdomains=\"true\">{ip_address}</domain>\n"

        modified_content = content.replace(closing_tag_with_indent, new_domain_entry + closing_tag_with_indent)

        with open(config_file_path, 'w') as f:
            f.write(modified_content)
        
        print(f"Successfully added {ip_address} to {config_file_path}")

    except FileNotFoundError:
        print(f"Error: {config_file_path} not found.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    ip = obter_ip_lan()
    print(f"Obtained IP address: {ip}")
    
    config_file = "E:/praiometro/frontend/android/app/src/main/res/xml/network_security_config.xml"
    update_network_security_config(ip, config_file)
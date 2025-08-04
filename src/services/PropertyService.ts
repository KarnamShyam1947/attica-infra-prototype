import { showAlert } from "../utils/Alerts";

export const addProperty = async (data: any) => {
    try {
        const resp = await fetch(`http://localhost:3000/api/v1/properties/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        //   await new Promise(resolve => setTimeout(resolve, 2000));

        const result = await resp.json();

        if (!resp.ok) {
            const errorMessage = result.error || "Unknown error occurred.";
            
            showAlert("Error", errorMessage, "error");
            return { success: false, error: errorMessage };
        }
        
        
        showAlert("success", result.message, "success");
        return { success: true, property: result.property };
    } catch (error: any) {
        showAlert("error","Failed to add the property details: " + error.message, "error");
        return { success: false, error: error.message };
    }
};

export const fetchProperties = async () => {
    try {
        const resp = await fetch(`http://localhost:3000/api/v1/properties/`);

        const result = await resp.json();

        if (!resp.ok) {
            const errorMessage = result.error || "Unknown error occurred.";
            showAlert("error", "Failed to fetch property details: " + errorMessage, "error");
            return { success: false, error: errorMessage };
        }

        showAlert("Success", result.message, "success");
        return { success: true, properties: result.properties };
    } catch (error: any) {
        showAlert("Error", "Failed to fetch the property details: " + error.message, "error");
        return { success: false, error: error.message };
    }
};

export const deleteProperty = async (id: any) => {
    try {
        const resp = await fetch(`http://localhost:3000/api/v1/properties/${id}`, {
            method: "DELETE"
        });

        const result = await resp.json();

        if (!resp.ok) {
            const errorMessage = result.error || "Unknown error occurred.";
            showAlert("error", "Failed to delete property details: " + errorMessage, "error");
            return { success: false, error: errorMessage };
        }

        showAlert("Success", result.message, "success");
        return { success: true };
    } catch (error: any) {
        showAlert("Error", "Failed to delete the property details: " + error.message, "error");
        return { success: false, error: error.message };
    }
};


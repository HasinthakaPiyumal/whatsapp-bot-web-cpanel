import { CheckIcon, DeleteIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import {
	Box,
	Flex,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import alertRequest from "../services/alertRequest";
import { useNavigate } from "react-router-dom";
const ActionDotsVert = (prop) => {
    const navigate = useNavigate();
    
	function onActive() {
		alertRequest.post("/table/active", { table: prop.tableId, id: prop.id },prop.loadTable);
	}
	function onInactive() {
		alertRequest.post("/table/inactive", { table: prop.tableId, id: prop.id },prop.loadTable);
	}
	function onDelete() {
		alertRequest.post("/table/delete", { table: prop.tableId, id: prop.id },prop.loadTable);
	}
    function onEdit(){
        navigate(prop.editPath+"?id="+prop.id);
    }

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Menu width={10}>
				<MenuButton
					as={IconButton}
					aria-label="Options"
					icon={<BsThreeDotsVertical />}
					variant="ghost"
					padding={0}
					margin={0}
				/>
				<MenuList>
					<MenuItem icon={<EditIcon />} command="E" onClick={onEdit}>
						Edit
					</MenuItem>
					<MenuItem icon={<CheckIcon />} command="A" onClick={onActive}>
						Active
					</MenuItem>
					<MenuItem icon={<CloseIcon />} command="I" onClick={onInactive}>
						Inactive
					</MenuItem>
					<MenuItem icon={<DeleteIcon />} command="D" onClick={onDelete}>
						Delete
					</MenuItem>
				</MenuList>
			</Menu>
		</div>
	);
};

export default ActionDotsVert;

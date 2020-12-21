import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
export default function Studentlist({
  studentlist,
  handleclick,
  handlechange
}) {
  return (
    <>
      <div className="studentlist">
        <input id="search" placeholder="Search..." onChange={handlechange} />
        <List component="nav" aria-label="main mailbox folders">
          <div>
            {studentlist.map((el, index) => (
              <ListItem button onClick={() => handleclick(index)} key={el.id}>
                <ListItemIcon>
                  <AccountCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={el.name} />
              </ListItem>
            ))}
          </div>
        </List>
      </div>
    </>
  );
}
